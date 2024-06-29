interface Props {
  className?: string;
  data: ProjectData;
}

interface ProjectData {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  deploymentUrl?: string;
}

export default function ProjectItem({ className, data }: Props) {
  const imagePath = `/images/${data.image}`;

  return (
    <div className={`${className}`}>
      {/* Project Item */}
      <div className="flex w-full flex-col gap-1">
        <div className="aspect-[3/2] rounded border-2 border-black">
          <img
            src={imagePath}
            alt={data.title}
            className="h-full w-full object-fill"
          />
        </div>

        <div className="flex flex-row items-center justify-between">
          <p className="text-xl font-bold">{data.title}</p>
          {/* GitHub / Deployment */}
          <div className="h-full">
            {data.githubUrl && (
              <a href={data.githubUrl} target="_blank" className="inline-block">
                <svg
                  className="h-[1.65em] w-auto stroke-gray-400 transition-all duration-200 hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                </svg>
              </a>
            )}
            {data.deploymentUrl && (
              <a
                href={data.deploymentUrl}
                target="_blank"
                className="inline-block"
              >
                <svg
                  className="h-[1.65em] w-auto stroke-gray-400 transition-all duration-200 hover:stroke-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                  <polyline points="15 3 21 3 21 9"></polyline>
                  <line x1="10" y1="14" x2="21" y2="3"></line>
                </svg>
              </a>
            )}
          </div>
        </div>
        <p className="text-md">{data.description}</p>
        <div className="flex flex-row flex-wrap gap-1 text-sm">
          {data.technologies.map((tech) => (
            <span
              key={tech}
              className="border-1 rounded-2xl border border-black px-2 font-semibold"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
