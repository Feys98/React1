import { useState } from "react";
import femaleProfil from "./images/femaleProfil.jpg";
import maleProfil from "./images/maleProfil.jpg";


const Employees = () =>
{

    const [employees, setEmployees] = useState([
        {
            id: 1,
            fullName: "John Dough",
            destgnation: "Manager",
            gender: "Male",
            teamName: "Team A"
        },
        {
            id: 2,
            fullName: "Mary Janna",
            destgnation: "Team Lead",
            gender: "Female",
            teamName: "Team A"
        },
        {
            id: 3,
            fullName: "Peter Pietrovic",
            destgnation: "Developer",
            gender: "Male",
            teamName: "Team B"
        },
        {
            id: 4,
            fullName: "Susan Susansky",
            destgnation: "Developer",
            gender: "Female",
            teamName: "Team B"
        },
        {
            id: 5,
            fullName: "Jakub Hoczek",
            destgnation: "Developer",
            gender: "Male",
            teamName: "Team C"
        },
        {
            id: 5,
            fullName: "Anna Kowalska",
            destgnation: "None",
            gender: "Female",
            teamName: "Team B"
        },
        {
            id: 6,
            fullName: "Joanna Kowalska",
            destgnation: "Graphic Designer",
            gender: "Female",
            teamName: "Team C"
        }
    ]);

    return (
        <main className="container">
            <div class="row justify-content-center mt-3 mb-3">
                <div class="col-8">
                    <div class="card-collection">
                        {
                            employees.map((employees) => (
                                <div id={employees.id} className="card m-1" style={{ cursor: "pointer" }}>
                                    {(employees.gender === 'Female') ?
                                        <img src={femaleProfil} className="card-img-top" />
                                        : <img src={maleProfil} className="card-img-top" />}
                                    <div className="card-body">
                                        <h5 className="card-title">{employees.fullName}</h5>
                                        <p className="card-text">{employees.destgnation}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </main>
    );
}
export default Employees;