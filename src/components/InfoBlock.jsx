const InfoBlock = ({ icon, data, type }) => {

    return <>
        <div className="flex items-center gap-2 justify-center text-white text">
            {icon}
            <a href="tel:3333541774">{data}</a>
        </div>
    </>
}
export default InfoBlock;