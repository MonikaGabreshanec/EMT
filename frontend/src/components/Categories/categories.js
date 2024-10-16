import React from 'react';

const CategoryList = ({ categories }) => {
    return (
        <div className="container mt-5">
            <h2 className="text-center mb-5" style={{ fontWeight: 'bold', fontSize: '2rem', color: '#343a40' }}>Categories </h2>
            <div className="category-list-container" style={{ boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden' }}>
                <table className="table">
                    <thead style={{ backgroundColor: '#f8f9fa' }}>
                    <tr>
                        <th style={{ padding: '15px',fontSize: '1.1rem', fontWeight: '600' }}>Categories of accommodations</th>
                    </tr>
                    </thead>
                    <tbody>
                    {categories.map((category, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 === 0 ? '#f1f3f5' : '#ffffff' }}>
                            <td style={{ padding: '15px', fontSize: '1rem' }}>{category}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CategoryList;
