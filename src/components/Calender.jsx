import avtar from "../assets/avtar.jpeg"

function Calender()
{
    return(
        <>
            <div className="bg-purple-50 rounder-y-lg">
                <div className="flex  justify-end">
                    <img src={avtar} alt="" className="w-15 h-15"/>
                    <div className="bg-purple-900 text-white flex w-50">
                        +
                    </div>

                </div>

            </div>


        </>
    )


}


export default Calender