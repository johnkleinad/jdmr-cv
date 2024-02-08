import { ChebronIcon, CloseChebronIcon } from "./Icons"

export function ChebronContainer({ children, size }) {
    return <div className="flex items-center">
        <ChebronIcon size={size} />
        {children}
        <CloseChebronIcon size={size} />
    </div>
}

export function JobBlock({ date, jobTitle, descriptionTitle, description }) {
    return <>
        <ChebronContainer size={17}>
            <span className="font-medium">{date}</span>
        </ChebronContainer>
        <ChebronContainer size={30}>
            <h4 className="text-3xl text-left font-medium -ml-1">{jobTitle}</h4>
        </ChebronContainer>
        <div className="flex flex-col gap-2 mt-2 mb-10 text-left">
            <h4 className="text-2xl font-medium flex">{descriptionTitle}</h4>
            <p className="text-justify">{description}</p>
        </div>
    </>
}

export function AptitudeBlock({title, list}) {
    return <>
        <div className='my-5'>
            <ChebronContainer size={30}>
                <p className='text-3xl'>{title}</p>
            </ChebronContainer>
            <p>{list}</p>
        </div>
    </>
}