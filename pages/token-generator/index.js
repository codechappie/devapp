import React, { useContext, useEffect, useState } from 'react'
import Head from 'next/head'
import StoreContext from '../../store'
import Layout from '../../components/layout'


function HomePage() {
  const store = useContext(StoreContext)
  const [length, setLength] = useState(1)
  const [capitalize, setCapitalize] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)
  const [result, setResult] = useState("")

  const generateToken = (e) => {
    e?.preventDefault();
    let capitalWords = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowerWords = 'abcdefghijklmnopqrstuvwxyz';
    const numbersList = '0123456789';
    const symbolsList = `!"#$%&/()=?¡¿*+-_':;.,<>@`;
    let characters = '';
    if (capitalize) characters = characters.concat(capitalWords);
    if (lowercase) characters = characters.concat(lowerWords);
    if (numbers) characters = characters.concat(numbersList);
    if (symbols) characters = characters.concat(symbolsList);
    let finalResult = '';
    let charactersLength = characters.length;
    for (let counter = 0; counter < length; counter++) {
      finalResult += characters.charAt(Math.floor(Math.random() *
        charactersLength));
    }

    setResult(finalResult)
  }


  useEffect(() => {
    let txtarea = document.querySelector(".custom-textarea")
    // txtarea.style.height = (txtarea.scrollHeight) + 'px';

    txtarea.style.height = (txtarea.scrollHeight > txtarea.clientHeight) ? (txtarea.scrollHeight)+"px" : "60px";
    return () => { }
  }, [result])

  useEffect(() => {
    generateToken()
    return () => { }
  }, [length, capitalize, lowercase, numbers, symbols])




  return (
    <Layout>
      <Head>
        <title>Token</title>
      </Head>

      <div className='w-auto max-w-3xl m-auto'>
        <h2 className='text-4xl mb-3'>Generador de Token</h2>
        <p>Generar cadenas de texto aleatorias con los caracteres que desees: Letras mayusculas o minusculas, numeros y/o simbolos.</p>
        <form className='card card-body bg-gray-800 mt-5 shadow items-center text-center'>
          <div className='grid grid-cols-2 gap-4 mb-4'>
            <div className="form-control">
              <label htmlFor="Capital" className="label cursor-pointer">
                <span className="label-text text-left">Mayusculas (ABC...)</span>
                <input
                  checked={capitalize}
                  onChange={e => { setCapitalize(e.target.checked) }}
                  type="checkbox"
                  className="toggle toggle-sm md:toggle-md toggle-primary ml-2" />
              </label>
            </div>

            <div className="form-control">
              <label htmlFor="Lower" className="label cursor-pointer">
                <span className="label-text text-left">Minusculas (xyz...)</span>
                <input
                  checked={lowercase}
                  onChange={e => { setLowercase(e.target.checked) }}
                  type="checkbox"
                  className="toggle toggle-sm md:toggle-md toggle-primary ml-2" />
              </label>
            </div>

            <div className="form-control">
              <label htmlFor="Numbers" className="label cursor-pointer">
                <span className="label-text text-left">Numeros (123...)</span>
                <input
                  checked={numbers}
                  onChange={e => { setNumbers(e.target.checked) }}
                  type="checkbox" className="toggle toggle-sm md:toggle-md toggle-primary ml-2" />
              </label>
            </div>

            <div className="form-control">
              <label htmlFor="Symbols" className="label cursor-pointer">
                <span className="label-text text-left">Simbolos (#$!...)</span>
                <input
                  checked={symbols}
                  onChange={e => { setSymbols(e.target.checked) }}
                  type="checkbox" className="toggle toggle-sm md:toggle-md toggle-primary ml-2" />
              </label>
            </div>

          </div>

          <div className='form-control w-full'>
            <label className='label-text mb-4'>N° de caracteres ( {length} )</label>
            <input type="range" min="1" max="512" value={length} onChange={e => { setLength(e.target.value) }} className="range range-primary" />
          </div>

          <div className='form-control w-full'>
            <textarea
              readOnly
              className="textarea custom-textarea textarea-primary break-all border-2 mt-4 resize-none"
              value={result.split("").splice(0, length).join("")} placeholder="Token ..."></textarea>
          </div>

          <div className='grid grid-cols-2 gap-4 mt-4'>
            <button className="btn btn-primary">Copiar</button>
            <button className="btn btn-primary" onClick={(e) => { generateToken(e) }}>Regenerar</button>
          </div>
        </form>
      </div>

    </Layout>
  )
}

export default HomePage
