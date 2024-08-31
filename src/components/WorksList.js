import { React, useState } from "react";
import { works } from "../data/works";
import { Link } from 'react-router-dom';

export const WorksList = ({ limit="" }) => {
    // Render a few random projects reading a works array to be displayed on home page: 
    // State to manage the current page
    const [currentPage, setCurrentPage] = useState(1);

    // Items per page
    const itemsPerPage = 8;

    // Calculate the total number of pages
    const totalPages = Math.ceil(works.length / itemsPerPage);

    // Calculate the start and end index for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;

    // Slice the works array to get the items for the current page
    const currentWorks = works.slice(startIndex, endIndex);

    // Function to handle page change
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    return (
        <section className="projects">
            <div className="projects-list">
                {limit !== "" ?
                    works.slice(0, limit).map(work => {
                        //{/* Go over the array and read every object as JSON to be displayed on screen */ }
                        return (
                            <article className="work-item" key={work.id}>
                                <div className="mask">
                                    <img src={"/img/catalog/" + work.id + ".png"} alt="img" />
                                </div>
                                <h2><Link to={"/project/" + work.id}> {work.name}</Link> </h2>
                                <span>Precio: {work.price}</span>
                                {/* <h3>Materiales utilizados: {work.materials}</h3> */}
                                <span>Categoria: {work.categories}</span>
                            </article>
                        );
                    })
                    :
                    currentWorks.map(work => {
                        //{/* Go over the array and read every object as JSON to be displayed on screen */ }
                        return (
                            <article className="work-item" key={work.id}>
                                <div className="mask">
                                    <img src={"/img/catalog/" + work.id + ".png"} alt="img" />
                                </div>
                                <h2><Link to={"/project/" + work.id}> {work.name}</Link> </h2>
                                <span>Precio: {work.price}</span>
                                {/* <h3>Materiales utilizados: {work.materials}</h3> */}
                                <span>Categoria: {work.categories}</span>
                            </article>
                        );
                    })
                }

            </div>


            {/* Pagination Controls */}
            {limit !== "" ?
                <></>
                :
                <div className="pagination">
                    {Array.from({ length: totalPages }, (_, index) => (
                        <button
                            key={index}
                            onClick={() => handlePageChange(index + 1)}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </button>
                    ))}
                </div>
            }
        </section>
    )
}
