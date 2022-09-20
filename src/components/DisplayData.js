import axios from 'axios';
import { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';

const DisplayData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get("https://api.coincap.io/v2/assets").then((res) => {
            setData(res.data.data)

        }).catch((err) => {
            console.log(err)
        })
    }, [])


    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Rank</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Market Caps</th>
                    <th>VWAP (24Hr)</th>
                    <th>Supply</th>
                    <th>Value</th>
                    <th>Change</th>
                </tr>
            </thead>
            <tbody>
                {data.map((e) => {

                    const { rank, name, priceUsd, marketCapUsd, vwap24Hr, supply, volumeUsd24Hr, changePercent24Hr } = e;
                    return (
                        <tr>
                            <td >{rank}</td>
                            <td>{name}</td>
                            <td>${priceUsd}</td>
                            <td>${marketCapUsd}</td>
                            <td >{vwap24Hr}</td>
                            <td>{supply}</td>
                            <td>${volumeUsd24Hr}</td>
                            <td>{changePercent24Hr}</td>
                        </tr>

                    )
                }
                )}



            </tbody>
        </Table>
    );
}

export default DisplayData;