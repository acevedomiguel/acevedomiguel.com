export default function AreaExpertise() {
  return (
    <div>
      <h2 id="expertise" className="text-2xl font-semibold mb-5 editorial-ui">
									Areas of Expertise
								</h2>

								<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
									<div>
										<h3 className="font-medium text-gray-900 mb-2 editorial-ui">
											Architectural Design
										</h3>
										<ul className="expertise-list text-gray-600 space-y-1.5">
											<li>Serverless Architecture Patterns</li>
											<li>Event-Driven IoT Core</li>
											<li>Multi-Region Resilience</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2 editorial-ui">
											DevOps & Automation
										</h3>
										<ul className="expertise-list text-gray-600 space-y-1.5">
											<li>Zero-Touch CI/CD</li>
											<li>Infrastructure as Code</li>
											<li>Security Hardening</li>
										</ul>
									</div>

									<div>
										<h3 className="font-medium text-gray-900 mb-2 editorial-ui">
											Strategic Leadership
										</h3>
										<ul className="expertise-list text-gray-600 space-y-1.5">
											<li>Cloud Cost Optimization</li>
											<li>Technical Governance</li>
											<li>Modernization Roadmaps</li>
										</ul>
									</div>
								</div>
    </div>
  );
}