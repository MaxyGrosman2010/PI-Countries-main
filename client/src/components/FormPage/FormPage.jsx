export default function FormPage(){
    return (
        <div>
            <form action="">
                <h2>Create an Activity</h2>

                <label >Name:</label>
                <input type="text" />

                <label >Difficulty:</label>
                <select name="difficulty" >
                    <option value="difficulty" disabled="disable">Select difficulty</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>

                <label >Duration</label>
                <input type="number" />

                <label >Season</label>
                <select name="season">
                    <option value="season" disabled="disable">Select season</option>
                    <option value="Verano">Summer</option>
                    <option value="Otoño">Autumn</option>
                    <option value="Invierno">Winter</option>
                    <option value="Primavera">Spring</option>
                </select>

                <label >Country/Countries</label>

                <button type="submit">Submit</button>
            </form>
        </div>
    )
};