import React from 'react';
import './Main.css';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import { BiSearch } from 'react-icons/bi';

const Main = () => {
    return (
        <>
            <Container>
                <div className="col d-flex justify-content-between flex-wrap">
                    <Button variant="primary" size="sm" className="buttons">Open Orders</Button>{' '}
                    <Button variant="primary" size="sm" className="buttons">Short Quantity Orders</Button>{' '}
                    <Button variant="primary" size="sm" className="buttons">Trucker Requested Orders</Button>{' '}
                    <Button variant="primary" size="sm" className="buttons">Dispatched Orders</Button>{' '}

                    <div className="search-form">
                        <form className="d-flex align-items-center rounded" action="#">
                            <input type="text" placeholder="Search" title="Enter search keyword" />
                            <button type="submit" title="Search" className="btn border-dark m-2">
                                <BiSearch style={{ fontSize: '20px' }} />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="col-sm mt-1">
                    <Table striped condensed bordered hover>
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Username</th>
                                <th>Address</th>
                                <th>Address</th>
                                <th>Address</th>
                                <th>Address</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Mark</td>
                                <td>Otto</td>
                                <td>@mdo</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>10</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>11</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>12</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>
                            <tr>
                                <td>13</td>
                                <td>Larry</td>
                                <td>Thornton</td>
                                <td>@twitter</td>
                                <td>Jacob</td>
                                <td>Thornton</td>
                                <td>@fat</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                                <td>Address</td>
                            </tr>

                        </tbody>
                    </Table>
                </div>

                <Pagination className="m-1 text-align-center">
                    <Pagination.First />
                    <Pagination.Prev />
                    <Pagination.Item>{1}</Pagination.Item>
                    <Pagination.Ellipsis />

                    <Pagination.Item>{10}</Pagination.Item>
                    <Pagination.Item>{11}</Pagination.Item>
                    <Pagination.Item active>{12}</Pagination.Item>
                    <Pagination.Item>{13}</Pagination.Item>
                    <Pagination.Item disabled>{14}</Pagination.Item>

                    <Pagination.Ellipsis />
                    <Pagination.Item>{20}</Pagination.Item>
                    <Pagination.Next />
                    <Pagination.Last />
                </Pagination>
            </Container>
        </>
    )
}

export default Main