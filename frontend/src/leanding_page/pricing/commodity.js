function Commodity() {
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Commodity futures</th>
                        <th>Commodity options</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Brokerage</td>
                        <td>0.03% or Rs. 20/executed order whichever is lower</td>
                        <td>₹20/executed order</td>
                    </tr>

                    <tr>
                        <td>STT/CTT</td>
                        <td>0.01% on sell side (Non-Agri)</td>
                        <td>0.05% on sell side</td>
                    </tr>

                    <tr>
                        <td>Transaction charges</td>
                        <td>
                            <div>MCX: 0.0021%</div>
                            <div>NSE: 0.0001%</div>
                        </td>
                        <td>
                            <div>MCX: 0.0418%</div>
                            <div>NSE: 0.001%</div>
                        </td>
                    </tr>

                    <tr>
                        <td>GST</td>
                        <td>18% (brokerage + SEBI + transaction charges)</td>
                        <td>18% (brokerage + SEBI + transaction charges)</td>
                    </tr>

                    <tr>
                        <td>SEBI charges</td>
                        <td>
                            <div>Agri: ₹1 / crore</div>
                            <div>Non-agri: ₹10 / crore</div>
                        </td>
                        <td>₹10 / crore</td>
                    </tr>

                    <tr>
                        <td>Stamp charges</td>
                        <td>0.002% or ₹200 / crore on buy side</td>
                        <td>0.003% or ₹300 / crore on buy side</td>
                    </tr>
                </tbody>
            </table>
        </>
    );
}


export default Commodity;