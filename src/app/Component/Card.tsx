interface Tprops {
    name:string,
    rollno:number,
    day:string,
}
const Card = (props:Tprops) => {
    return (
        <div className="bg-teal-400 border border-b-8 border-teal-600 font-bold italic shado-lg rounded-lg p-4 w-64 px-auto my-4 transform transition-transform duration-300 hover:scale-105">
            <h1>Name:{ props.name}</h1>
            <h1>RollNo:{ props.rollno}</h1>
            <h1>Day:{ props.day}</h1>
        </div>
    )
}
export default Card