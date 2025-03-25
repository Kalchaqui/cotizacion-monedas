import{currencies}from "../data"

export default function CriptoSeachForm() {
  return (
    <form className='form'>
        <div className='field'>
            <label htmlFor="currency">Moneda:</label>
            <select 
            name="currency" 
            id="currency"
            >
                <option value="">-- Selecciones --</option>
                {currencies.map(currency => (
                    <option key={currency.code} value=""> {currency.name} </option>
                ))}
            </select>
        </div>
        <div className='field'>
            <label htmlFor="currency">Crytomoneda:</label>
            <select 
            name="criptocurrency" 
            id="criptocurrency"
            >
                <option value="">-- Selecciones --</option>
            </select>
        </div>
        <input type="submit" value="Cotizar" />
    </form>
  )
}
