import './App.css'
import { LocationIcon, MailIcon, PhoneIcon } from './components/Icons'
import InfoBlock from './components/InfoBlock'
import { JobBlock, AptitudeBlock } from './components/JobBlock'

function App() {

  return <>
    <div className="container mx-auto w-full rounded-xl overflow-hidden">
      <div className='bg-header md:max-h-[500px] md:flex p-4 gap-3'>
        <div className="w-full justify-center flex">
          <img src="img/thumbnail_IMG_14281.png" className='w-full md:w-auto md:h-[300px] md:-m-4' alt="" />
        </div>
        <div className="w-full flex flex-col gap-5 pt-5">
          <h1 className='text-[#005E7B] font-medium text-3xl'>Juan Daniel Mejia Rodriguez</h1>
          <ul style={{ listStyleType: 'disc' }} className='flex justify-evenly text-lg'>
            <li>Web</li>
            <li>UX/UI</li>
            <li>Móvil</li>
          </ul>
          <div className='text-justify'>
            <p>Soy una persona versátil, me gusta aprender y progresar, soy muy realista y objetivo a la hora de tomar decisiones, No me cierro a una sola opinión, creo que todo es cuestión de perspectiva. La creatividad es uno de mis fortalezas y facilidad para encontrar soluciones.</p>
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br p-4 from-[#6bf8de] to-[#274b80] flex  flex-col gap-4 md:flex-row md:justify-around">
        <InfoBlock
          icon={<PhoneIcon size={25} />}
          type={'tel'}
          data={'3333541774'}
        />
        <InfoBlock
          icon={<MailIcon size={25} />}
          type={'tel'}
          data={'juan_mejia13@outlook.com'}
        />
        <InfoBlock
          icon={<LocationIcon size={25} />}
          type={'tel'}
          data={'Residencial Zacatenco, GAM, CDMX'}
        />
      </div>
      <div className="bg-[#E6E6E6] grid md:grid-cols-2">
        <div className="p-4 md:px-20">
          <div className='text-left text-4xl font-medium mb-5 mt-2'>
            <h2>Experiencia laboral</h2>
          </div>
          <JobBlock
            date={'Octubre 2022 - Noviembre 2023'}
            jobTitle={'Grupo TRACSA'}
            descriptionTitle={'Desarrollador web Sinior'}
            description={'Apoyé en el desarrollo de herramientas web y de la implementación de Microsoft 365 para el uso interno del conglomerado de empresas que componen Grupo Tracsa, mismas que facilitaron y optimizaron procesos como registros y administración de datos, comunicación y servicios a los clientes y comunicación interna entre colaboradores de la empresa.'}
          />
          <JobBlock
            date={'Enero 2021 - Junio 2022'}
            jobTitle={'Xoy Capital'}
            descriptionTitle={'Desarrollador web & UI/UX  designer'}
            description={'Realicé el rediseño del sitio de apuestas “Upick” desde el uso de un nuevo framework para mejorar la velocidad, el rendimiento y la actualización de datos en tiempo real, hasta el rediseño y mejora de el UX y UI para que al usuario final se le facilitara más el uso de la plataforma. Se globalizó el uso de “Next.js” junto con “Tailwind css” lo que a reducir los tiempos de desarrollo para las diferentes páginas y aplicaciones del conglomerado de la empresa.'}
          />
          <JobBlock
            date={'Agosto 2019 - Enero 2021'}
            jobTitle={'Vancouver Wings'}
            descriptionTitle={'Auxiliar de Sistemas'}
            description={'Implemente procesos para mejorar los tiempos de espera para el soporte técnico de las sucursales y franquicias, realicé capacitaciones al personal en las aperturas de franquicias e instalación del sistema y equipos para el funcionamiento de los puntos de venta, Hice herramientas internas para la comunicación interna del corporativo y clientes, mantenimiento a los equipos de cómputo tanto de las sucursales y franquicias como dentro del corporativo.'}
          />
        </div>

        <div className='relative text-left p-4 md:px-20'>
          <div className="absolute bg-gradient-to-t from-[#6BF8DE] to-[#26487700] inset-0 opacity-20" />
          <div className='text-left text-4xl font-medium mb-5 mt-2'>
            <h2>Aptitudes</h2>
          </div>
          <AptitudeBlock
            title={'Industrias'}
            list={'Financiera, Deportes, Alimentos, Educación'}
          />
          <AptitudeBlock
            title={'Métodos de proyectos'}
            list={'SCRUM, PMI'}
          />
          <AptitudeBlock
            title={'Plataformas'}
            list={'Vercel, Mongo Atlas, Netlify, Firebase, Planet Scale, Github, Gitlab'}
          />
          <AptitudeBlock
            title={'Aplicaciones'}
            list={'VSCode, Figma, Mongo Compass, Postman, Xcode'}
          />
          <AptitudeBlock
            title={'Otras Utilidades'}
            list={'React.js, React Native, Next.js, Framer Motion, Tailwind,  Moti, MongoDB, Prisma, Expo, Vite, Vue.js, Ninja(Phyton), Angular.js GraphQL, Materialize CSS, Git, Yarn, Npm, Node.js'}
          />
        </div>
      </div>
    </div>
  </>
}

export default App