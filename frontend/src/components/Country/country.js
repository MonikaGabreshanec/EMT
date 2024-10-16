import React from "react";

const Countries = (props) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-4" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#2c3e50' }}>Countries</h2>
            <div className="countries-list-container" style={{ boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)', borderRadius: '10px', overflow: 'hidden', backgroundColor: '#fff' }}>
                <div className="table-responsive">
                    <table className="table mb-0">
                        <thead style={{ backgroundColor: '#e9ecef' }}>
                        <tr>
                            <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.2rem', fontWeight: '600', color: '#34495e' }}>Country</th>
                            <th style={{ padding: '20px', textAlign: 'center', fontSize: '1.2rem', fontWeight: '600', color: '#34495e' }}>Continent</th>
                        </tr>
                        </thead>
                        <tbody>
                        {props.countries.map((term, index) => {
                            return (
                                <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f9fafb' : '#ffffff' }}>
                                    <td style={{ padding: '20px', textAlign: 'center', fontSize: '1rem', color: '#555' }}>{term.name}</td>
                                    <td style={{ padding: '20px', textAlign: 'center', fontSize: '1rem', color: '#555' }}>{term.continent}</td>
                                </tr>
                            );
                        })}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Countries;
