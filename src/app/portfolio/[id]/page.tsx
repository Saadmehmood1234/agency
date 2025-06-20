"use client";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useParams } from "next/navigation";
interface BaseProject {
  id: number;
  title: string;
  description: string;
  category: string;
  image: string;
  link: string;
  liveUrl?: string;
}

interface DetailedProject extends BaseProject {
  details: string;
  technologies: string[];
  features: string[];
  challenges?: string[];
  benefits?: string[];
}

type Project = BaseProject | DetailedProject;

import { projects } from "@/lib/projects";
import { div } from "framer-motion/client";

function isDetailedProject(project: Project): project is DetailedProject {
  return (
    "details" in project && "technologies" in project && "features" in project
  );
}

export default function ProjectDetail() {
  const {id}=useParams()
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return notFound();
  }

  return (
    <div
      style={{
        backgroundColor: "#ffffff",
        backgroundImage:
          'url("https://www.transparenttextures.com/patterns/skeletal-weave.png")',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8 max-md:mt-8">
          <Link
            href="/portfolio"
            className="text-[#FB2056] hover:text-[#d81b4a] flex items-center"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Back to Projects
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          <div className="space-y-6">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
                priority
              />
            </div>

            {project.liveUrl && (
              <div>
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-[#FB2056] text-white rounded-lg hover:bg-[#d81b4a] transition-colors"
                >
                  Visit Live Site
                  <svg
                    className="w-5 h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                    />
                  </svg>
                </a>
              </div>
            )}
          </div>

          <div className="space-y-8">
            <div>
              <span className="inline-block mb-3 bg-gray-100 text-[#FB2056] text-sm font-medium px-3 py-1 rounded-full">
                {project.category}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                {project.title}
              </h1>
              <p className="text-lg md:text-xl text-gray-600">
                {project.description}
              </p>
            </div>

            {isDetailedProject(project) && (
              <>
                {project.details && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      Project Details
                    </h2>
                    <p className="text-gray-700">{project.details}</p>
                  </div>
                )}

                {project.technologies && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      Technologies Used
                    </h2>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={`tech-${index}`}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {project.features && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      Key Features
                    </h2>
                    <ul className="space-y-2">
                      {project.features.map((feature, index) => (
                        <li
                          key={`feature-${index}`}
                          className="flex items-start"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-[#FB2056] mt-0.5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.challenges && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      Challenges & Solutions
                    </h2>
                    <ul className="space-y-2">
                      {project.challenges.map((challenge, index) => (
                        <li
                          key={`challenge-${index}`}
                          className="text-gray-700"
                        >
                          <span className="font-medium text-gray-900">
                            Challenge:
                          </span>{" "}
                          {challenge}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {project.benefits && (
                  <div>
                    <h2 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
                      Customer Benefits
                    </h2>
                    <ul className="space-y-2">
                      {project.benefits.map((benefit, index) => (
                        <li
                          key={`benefit-${index}`}
                          className="flex items-start"
                        >
                          <svg
                            className="flex-shrink-0 w-5 h-5 text-green-500 mt-0.5 mr-2"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          <span className="text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
