import * as React from 'react';
import './App.css';
import Header from './Header';
import Employees from './Employees';
import Footer from './Footer';
import GroupedTeamMembers from './GroupedTeamMembers';
import Nav from './Navbar';
import NotFound from './NotFound';
import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App()
{
    const [selectedTeam, setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamB");

    const [employees, setEmployees] = useState(JSON.parse(localStorage.getItem('employeeList')) || [
        {
            id: 1,
            fullName: "John Dough",
            designation: "Manager",
            gender: "Male",
            teamName: "TeamA"
        },
        {
            id: 2,
            fullName: "Mary Janna",
            designation: "Team Lead",
            gender: "Female",
            teamName: "TeamA"
        },
        {
            id: 3,
            fullName: "Peter Pietrovic",
            designation: "Developer",
            gender: "Male",
            teamName: "TeamB"
        },
        {
            id: 4,
            fullName: "Susan Susansky",
            designation: "Developer",
            gender: "Female",
            teamName: "TeamB"
        },
        {
            id: 5,
            fullName: "Jakub Hoczek",
            designation: "Coffy Maker",
            gender: "Male",
            teamName: "TeamC"
        },
        {
            id: 6,
            fullName: "Anna Kowalska",
            designation: "None",
            gender: "Female",
            teamName: "TeamB"
        },
        {
            id: 7,
            fullName: "Joanna Kowalska",
            designation: "Graphic Designer",
            gender: "Female",
            teamName: "TeamC"
        }
    ]);

    useEffect(() =>
    {

        localStorage.setItem('employeeList', JSON.stringify(employees));

    }, [employees]);

    useEffect(() =>
    {

        localStorage.setItem('selectedTeam', JSON.stringify(selectedTeam));

    }, [selectedTeam]);


    function handleTeamSelectionChange(event)
    {
        setTeam(event.target.value);
    }
    function handleEmployeeCardClick(event)
    {
        const transformedEmployees = employees.map((employee) => employee.id === parseInt(event.currentTarget.id)
            ? (employee.teamName === selectedTeam) ? { ...employee, teamName: '' } : { ...employee, teamName: selectedTeam }
            : employee);
        setEmployees(transformedEmployees);

    }

    return (
        <Router>
            <Nav />
            <Header selectedTeam={selectedTeam}
                teamMemberCount={employees.filter((employee) => employee.teamName === selectedTeam).length}
            />
            <Routes>
                <Route path="/"
                    element={<Employees employees={employees}
                        selectedTeam={selectedTeam}
                        handleEmployeeCardClick={handleEmployeeCardClick}
                        handleTeamSelectionChange={handleTeamSelectionChange}
                    />}>

                </Route>
                <Route path="/GroupedTeamMembers" element={<GroupedTeamMembers employees={employees}
                    selectedTeam={selectedTeam} setTeam={setTeam} />}>
                </Route>
                <Route path="*" element={<NotFound />}>
                </Route>
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;