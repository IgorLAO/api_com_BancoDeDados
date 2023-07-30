const Card = (nomesProps) =>{

      console.log({nomesProps})
    return(
        <>
        <div>
            {nomesProps.map((item) => {
                <>
                    <div>
                        {item}
                    </div>
                </>
            })}
        </div>
        </>
    )

}

export default Card