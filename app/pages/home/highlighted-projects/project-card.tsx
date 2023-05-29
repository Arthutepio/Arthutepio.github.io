import { Link } from '@/app/components/link'
import { Tech } from '@/app/components/tech'
import Image from 'next/image'

export const ProjecCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          src="/images/projeto.png"
          alt="image do projeto"
          width={420}
          height={304}
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full object-cover rounded-lg"
        />
      </div>

      <div>
        <h3 className="flex items-center gap-3 font-medium text-lg text-gray-50">
          <Image
            width={20}
            height={20}
            alt="icone"
            src="/images/icon_project.png"
          />
          Nome do Projeto
        </h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae
          blanditiis recusandae amet nihil, in ducimus voluptatum accusamus,
          eius beatae, sunt minus placeat ex veritatis fuga eligendi facere
          natus laboriosam! Quis maxime doloremque culpa officia deleniti, quo
          provident voluptatem autem. Ipsa!
        </p>

        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <Tech name="Typescript.js" />
          <Tech name="React" />
          <Tech name="Next.js" />
          <Tech name="Axios" />
          <Tech name="Node.js" />
          <Tech name="Tawilwind" />
        </div>

        <Link href="/projects">Ver projeto</Link>
      </div>
    </div>
  )
}
