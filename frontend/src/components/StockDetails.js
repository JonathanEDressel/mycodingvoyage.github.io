const StockDetails = function({stock}) {
    return (
        <div className="stock-details">
            <h4>{stock.name}</h4>
            <p><strong>Shares: </strong> {stock.shares}</p>
            <p>
                <strong>Invested: </strong>{stock.investment_amount.toLocaleString('en-US', 
                { 
                    style: 'currency',
                    currency: 'USD'
                })}
            </p>
            <p>{stock.createdAt}</p>
        </div>
    )
}

export default StockDetails;