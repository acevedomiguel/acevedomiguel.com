import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaGithub, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import { HiDocumentSearch } from 'react-icons/hi';
import { SiBuymeacoffee } from 'react-icons/si';

export default function Index() {
    return (
    <>
        <div className="mt-10"></div>
        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" className="overflow-hidden rounded-2xl">
                <div class="flex items-center justify-center text-center p-5">
                    <div className="pr-4">
                    <div className="justify-center flex">
                        <img className="rounded-full w-28 mb-3" src="/profile.png" alt="" />
                    </div>
                    <h6 className="mb-2 font-semibold leading-5 text-lg">Miguel Acevedo</h6>
                    <p className="text-sm text-gray-900 mb-2">Target-oriented, senior software developer, with extensive experience in the digital marketing world and IoT. Knowledge of web technologies and understanding of devops and infrastructure.</p>

                    <FontAwesomeIcon icon={faMapMarkerAlt} className="text-sm text-gray-500" ></FontAwesomeIcon>{' '}
                    <span className="text-sm text-gray-500">Hong Kong</span>
                    </div>
                </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="/resume" target="_blank" className="linktree-resume overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <HiDocumentSearch className="react-icons" />{' '}
                        <span className="mb-2 font-semibold leading-5">Resume</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="http://hk.linkedin.com/in/acevedomiguel" target="_blank" className="linktree-linkedin overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaLinkedin className="react-icons" />{' '}
                        <span className="mb-2 font-semibold leading-5">Linkedin</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://www.twitter.com/faultydev" target="_blank" className="linktree-twitter overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaTwitter className="react-icons" />{' '}
                        <span className="mb-2 font-semibold leading-5">@faultydev</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://github.com/acevedomiguel" target="_blank" className="linktree-github overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaGithub className="react-icons" size="1.2em" />{' '}
                        <span className="mb-2 font-semibold leading-5">GitHub</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://www.instagram.com/acevedomiguel/" target="_blank" className="linktree-buymeacoffee overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-black flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <SiBuymeacoffee className="react-icons" size="1.2em" />{' '}
                        <span className="mb-2 font-semibold leading-5">Buy me a coffee</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>

        <div className="px-4 mx-auto mb-4 sm:max-w-xl">
            <div className="grid max-w-2xl sm:mx-auto">
                <a href="https://www.buymeacoffee.com/acevedomiguel" target="_blank" className="linktree-instagram overflow-hidden rounded-2xl shadow-sm">
                    <div className="text-white flex items-center justify-between p-5 rounded-sm">
                        <div className="pr-4">
                        <FaInstagram className="react-icons" size="1.2em" />{' '}
                        <span className="mb-2 font-semibold leading-5">acevedomiguel</span>
                        </div>
                    </div>
                </a>
            </div>
        </div>
    </>
    )
}

/*


            

            <div class="mt-10"></div>

            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-center text-center p-5 bg-white rounded-sm">
                    <div class="pr-4 my-3">
                    <h6 class="mb-2 font-semibold text-xl">Our adventure starts now!</h6>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div class="text-white bg-blue-600 mt-5 flex items-center justify-center p-4 rounded-xl">
                        <div>
                        <p class="font-semibold uppercase text-sm">Join Now</p>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </div>
            </div>

            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl">
                <div class="flex items-center justify-center text-center p-5 bg-white rounded-sm">
                    <div class="pr-4 my-3">
                    <h6 class="mb-2 font-semibold text-xl">Our new Merch is there</h6>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    <div class="text-white bg-indigo-600 mt-5 flex items-center justify-center p-4 rounded-xl">
                        <div>
                        <p class="font-semibold uppercase text-sm">Buy now - 5$</p>
                        </div>
                    </div>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl">
                <div class="flex items-center justify-center text-center p-5 bg-white rounded-sm">
                    <div class="pr-4 my-3">
                    <i class="text-5xl mb-3 fas fa-question-circle"></i>
                    <h6 class="mb-2 font-semibold text-xl">Did you need Help?</h6>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            

            <div class="mt-10"></div>

            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-between p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <h6 class="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-center text-center p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <h6 class="mb-2 font-semibold leading-5">Lorem Ipsum</h6>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-between p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <h6 class="font-semibold leading-5">Lorem Ipsum</h6>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-center text-center p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <h6 class="font-semibold leading-5">Lorem Ipsum</h6>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-between p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-github"></i>
                    <span class="mb-2 font-semibold leading-5">GitHub</span>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-center text-center p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-github"></i>
                    <span class="mb-2 font-semibold leading-5">GitHub</span>
                    <p class="text-sm text-gray-900">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden border hover:border-gray-400 transition-colors rounded-2xl shadow-sm">
                <div class="flex items-center justify-between p-5 bg-white rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-github"></i>
                    <span class="font-semibold leading-5">GitHub</span>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #161b22;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-github"></i>
                    <span class="font-semibold leading-5">GitHub</span>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #5865F2;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-discord"></i>
                    <span class="font-semibold leading-5">Discord</span>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #1DA1F2;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-twitter"></i>
                    <span class="font-semibold leading-5">Twitter</span>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #FF0000;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-youtube"></i>
                    <span class="font-semibold leading-5">YouTube</span>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #1cba59;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fas fa-check"></i>
                    <span class="font-semibold leading-5">All Systems are operational</span>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #161b22;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-github"></i>
                    <span class="font-semibold leading-5">GitHub</span>
                    <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #5865F2;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-discord"></i>
                    <span class="mb-2 font-semibold leading-5">Discord</span>
                    <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #1DA1F2;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-twitter"></i>
                    <span class="mb-2 font-semibold leading-5">Twitter</span>
                    <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            

            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="grid max-w-2xl sm:mx-auto">
                <a href="#" target="_blank" class="overflow-hidden rounded-2xl shadow-sm">
                <div style="background-color: #FF0000;" class="text-white flex items-center justify-between p-5 rounded-sm">
                    <div class="pr-4">
                    <i class="fab fa-youtube"></i>
                    <span class="mb-2 font-semibold leading-5">YouTube</span>
                    <p class="text-sm text-gray-100">Lorem ipsum dolor sit amet, consetetur sadipscing elitr</p>
                    </div>
                </div>
                </a>
            </div>
            </div>
            

            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="py-4 grid max-w-2xl sm:mx-auto">
                <hr class="border-gray-100 rounded border-t-2" />
            </div>
            </div>
            

            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="py-4 grid max-w-2xl sm:mx-auto">
                <hr class="border-gray-200 rounded border-t-2" />
            </div>
            </div>
            

            
            <div class="px-4 mx-auto mb-4 sm:max-w-xl">
            <div class="py-4 grid max-w-2xl sm:mx-auto">
                <hr class="border-gray-300 rounded border-t-2" />
            </div>
            </div>
            */