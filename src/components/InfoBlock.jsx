const InfoBlock = ({ icon, data, type }) => {

    const types = {
        tel: 'tel',
        mail:'mailto',
        adress:'adress'
    }
    return <>
        <div className="flex items-center gap-2 justify-center text-white text">
            {icon}
            <a href={`${types[type]}:${data}`}>{data}</a>
        </div>
    </>
}
export default InfoBlock;