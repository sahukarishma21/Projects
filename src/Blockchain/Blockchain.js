import { useState, useEffect } from "react"
import './Blockchain.css'

// https://api.coincap.io/v2/assets?limit=100

function BlockChain() {
  const [coins, setCoins] = useState([])
  const [limit, setLimit] = useState(100)

  useEffect(() => {
    const fetchCoins = async () => {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=${limit}`)
      const data = await res.json()
      console.log(data.data)
      setCoins (data.data)
      
    }

    fetchCoins()
  }, [limit])

  const handleRefresh = () => {
    setLimit(20)
    window.scrollTo(0, 0)
  }

  return (
    <section className="coins">
      <h1 className="heading">
        BlockChain
      </h1>
      <article>
        <p>Showing {coins.length} coins</p>
      </article>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Symbol</th>
            <th>Name</th>
            <th>Price (USD)</th>
            <th>MarketCap(USD)</th>
          </tr>
        </thead>

        <tbody>
          {coins.map(({ id,rank,symbol, name, marketCapUsd, priceUsd }) => (
                <tr key={id}>
                <td>{rank}</td>
              <td>{symbol}</td>
              <td>{name}</td>
              
              <td>${parseFloat(priceUsd).toFixed(2)}</td>
              <td>${parseFloat(marketCapUsd).toFixed(3)}</td>
              </tr>
          ))}
        </tbody>
      </table>

      <div className="buttons">
        <button onClick={() => setLimit(limit + 100)}>Next</button>
        <button onClick={handleRefresh}>Refresh</button>
      </div>
    </section>
  )
}

export default BlockChain;