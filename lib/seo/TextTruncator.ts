export interface TruncationOptions {
  maxLength: number;
  ellipsis?: string;
  preserveWords?: boolean;
  minWordLength?: number;
}

export interface TruncationResult {
  text: string;
  wasTruncated: boolean;
  originalLength: number;
  finalLength: number;
}

export class TextTruncator {
  /**
   * Truncate text for meta descriptions (150-160 characters optimal)
   */
  static truncateDescription(text: string, maxLength: number = 160): TruncationResult {
    return this.truncateText(text, {
      maxLength,
      ellipsis: '...',
      preserveWords: true,
      minWordLength: 120
    });
  }

  /**
   * Truncate text for page titles (60 characters max)
   */
  static truncateTitle(text: string, maxLength: number = 60): TruncationResult {
    return this.truncateText(text, {
      maxLength,
      ellipsis: '...',
      preserveWords: true,
      minWordLength: 40
    });
  }

  /**
   * Generic text truncation with intelligent word boundary handling
   */
  static truncateText(text: string, options: TruncationOptions): TruncationResult {
    const {
      maxLength,
      ellipsis = '...',
      preserveWords = true,
      minWordLength = Math.floor(maxLength * 0.7)
    } = options;

    const originalLength = text.length;

    // Return as-is if within limit
    if (originalLength <= maxLength) {
      return {
        text,
        wasTruncated: false,
        originalLength,
        finalLength: originalLength
      };
    }

    // Calculate available space for content (excluding ellipsis)
    const availableLength = maxLength - ellipsis.length;

    if (availableLength <= 0) {
      return {
        text: ellipsis.substring(0, maxLength),
        wasTruncated: true,
        originalLength,
        finalLength: Math.min(ellipsis.length, maxLength)
      };
    }

    let truncatedText = text.substring(0, availableLength);

    // Try to preserve word boundaries if enabled
    if (preserveWords) {
      const lastSpaceIndex = truncatedText.lastIndexOf(' ');
      
      // Only truncate at word boundary if it doesn't make the text too short
      if (lastSpaceIndex > minWordLength) {
        truncatedText = truncatedText.substring(0, lastSpaceIndex);
      }
    }

    const finalText = truncatedText + ellipsis;

    return {
      text: finalText,
      wasTruncated: true,
      originalLength,
      finalLength: finalText.length
    };
  }

  /**
   * Validate text length against SEO best practices
   */
  static validateSEOLength(text: string, type: 'title' | 'description'): {
    isOptimal: boolean;
    isTooShort: boolean;
    isTooLong: boolean;
    length: number;
    recommendations: string[];
  } {
    const length = text.length;
    const recommendations: string[] = [];

    let isOptimal = false;
    let isTooShort = false;
    let isTooLong = false;

    if (type === 'title') {
      isOptimal = length >= 30 && length <= 60;
      isTooShort = length < 30;
      isTooLong = length > 60;

      if (isTooShort) {
        recommendations.push('Title is too short. Aim for 30-60 characters for better SEO.');
      }
      if (isTooLong) {
        recommendations.push('Title is too long. Keep it under 60 characters to avoid truncation in search results.');
      }
      if (isOptimal) {
        recommendations.push('Title length is optimal for SEO.');
      }
    } else if (type === 'description') {
      isOptimal = length >= 120 && length <= 160;
      isTooShort = length < 120;
      isTooLong = length > 160;

      if (isTooShort) {
        recommendations.push('Description is too short. Aim for 120-160 characters for better SEO.');
      }
      if (isTooLong) {
        recommendations.push('Description is too long. Keep it under 160 characters to avoid truncation in search results.');
      }
      if (isOptimal) {
        recommendations.push('Description length is optimal for SEO.');
      }
    }

    return {
      isOptimal,
      isTooShort,
      isTooLong,
      length,
      recommendations
    };
  }

  /**
   * Smart truncation that tries to end at sentence boundaries
   */
  static truncateAtSentence(text: string, maxLength: number): TruncationResult {
    const originalLength = text.length;

    if (originalLength <= maxLength) {
      return {
        text,
        wasTruncated: false,
        originalLength,
        finalLength: originalLength
      };
    }

    // Look for sentence endings within the limit
    const sentenceEndings = /[.!?]\s/g;
    let match;
    let lastSentenceEnd = -1;

    while ((match = sentenceEndings.exec(text)) !== null) {
      if (match.index + 1 <= maxLength - 3) { // Leave room for ellipsis
        lastSentenceEnd = match.index + 1;
      } else {
        break;
      }
    }

    // If we found a good sentence boundary, use it
    if (lastSentenceEnd > maxLength * 0.6) { // At least 60% of desired length
      const finalText = text.substring(0, lastSentenceEnd).trim();
      return {
        text: finalText,
        wasTruncated: true,
        originalLength,
        finalLength: finalText.length
      };
    }

    // Fall back to word boundary truncation
    return this.truncateText(text, {
      maxLength,
      ellipsis: '...',
      preserveWords: true
    });
  }
}