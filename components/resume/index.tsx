import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BsPhone } from "react-icons/bs";
import { CgWebsite } from "react-icons/cg";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import getData from "../../lib/getdata";
import type { ResumeData } from "../../types/resumedata";
import Skills from "./skills";
import Work from "./work";

const Resume = () => {
	const [data, setData] = useState();

	useEffect(() => {
		getData(setData);
	}, []);

	if (!data) {
		return <div />;
	}

	const cv: ResumeData = data;
	console.log(cv);

	return (
		<>
			<div className="container pt-4"></div>
			<div className="rounded-lg overflow-hidden md:my-4 pb-4 my-0">
				<div className="flex bg-slate-600 text-white font-light">
          <picture>
            <img
              className="rounded-none w-48 h-auto hidden md:block"
              alt="user avatar"
              src={cv.basics.image}
            />
          </picture>
					<div className="p-8">
						<h1 className="text-3xl lg:text-5xl antialiased font-medium">
							Acevedo Miguel
						</h1>
						<h2 className="lg:text-xl mt-1 mb-2 antialiased">
							{cv.basics.label}
						</h2>
						<p>{cv.basics.summary}</p>
					</div>
				</div>
				<div className="bg-slate-700 text-white sm:flex justify-between px-10 py-2 text-sm">
					<div className="my-2 sm:my-1">
						<FaEnvelope className="react-icons" /> me@acevedomiguel.com
					</div>
					<div className="my-2 sm:my-1">
						<ImLocation className="react-icons" /> Hong Kong
					</div>
					<div className="my-2 sm:my-1">
						<Link href="https://www.linkedin.com/in/acevedomiguel/" passHref>
							<FaLinkedin className="react-icons" />{" "}
							linkedin.com/in/acevedomiguel
						</Link>
					</div>
					<div className="my-2 sm:my-1">
						<BsPhone className="react-icons" /> (852) 6435-6936
					</div>
					<div className="my-2 sm:my-1">
						<Link href="https://www.acevedomiguel.com/" passHref>
							<CgWebsite className="react-icons" /> acevedomiguel.com
						</Link>
					</div>
				</div>
				<div className="border-x border-gray-100">
					<Work work={cv.work} />
					<Skills skills={cv.skills} />
				</div>
				<div className="border-x border-gray-100 border-b rounded-lg pb-6"></div>
			</div>
		</>
	);
};

export default Resume;
