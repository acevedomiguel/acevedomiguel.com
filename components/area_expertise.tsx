export default function AreaExpertise() {
  return (
    <div>
      <h2 id="expertise" className="text-xl font-semibold mb-4">
									Areas of Expertise
								</h2>

								<div className="grid md:grid-cols-3 gap-6">
									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											Architectural Design
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Architectural Design</li>
											<li>Event-Driven IoT Core</li>
											<li>Multi-Region Resilience</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											DevOps & Automation
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Zero-Touch CI/CD</li>
											<li>Infrastructure as Code</li>
											<li>Security Hardening</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2">
											Strategic Leadership
										</h3>
										<ul className="text-sm text-gray-600 space-y-1">
											<li>Cloud Cost Optimization</li>
											<li>Technical Governance</li>
											<li>Modernization Roadmaps</li>
										</ul>
									</div>
								</div>
    </div>
  );
}