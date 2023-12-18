function Car({carName})
{
    if(carName === "Dzire")
    {
        throw new Error("Dzire is Surya's car")
    }
    return(
        <div>
            {carName}        
        </div>
    )
}
export default Car;