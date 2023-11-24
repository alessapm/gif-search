import dynamic from 'next/dynamic';
import { useState, useEffect, Suspense } from "react";
import { getWebsiteData } from "./gifService";


export default function Home() {
  const [ gifs, setGifs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [inputValue, setInputValue] = useState('');

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const searchValue = inputValue;
    setSearchTerm(searchValue);
  };

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value)
  }

  useEffect(() => {
    const retrieveData = async () => {
      const gifData = await getWebsiteData(searchTerm);
      setGifs(gifData);
    };

    retrieveData();
  }, [searchTerm])

  return (
    <>
    <main className="flex flex-col bg-blueBlack h-auto min-h-screen items-center sm:p-8 md:p-64" data-testid="home-component">
      <div className="relative flex place-items-center text-xl mb-24 font-bold">
        Stash GIFs
      </div>

      <div className="flex justify-center mb-32 w-full p-8 md:p-16 rounded-md bg-blueBlack sm:bg-slate">
        <form onSubmit={handleSubmit} className="w-full flex justify-center flex-col sm:flex-row">
          <input name="searchTerm" 
          placeholder="search for GIFs"
          className="text-blueBlack p-2 rounded-md mb-2 sm:mb-0 sm:mr-2 px-4 sm:w-1/2 min-w-64"
          type="text"
          onChange={handleChange}
          />
          <button type="submit" className="bg-customBlue p-2 px-6 rounded-md text-black font-bold min-w-64">Search</button>
        </form>
      </div>
      <div>
      <Suspense fallback={<div>Loading...</div>}>
        <ul className="flex flex-wrap justify-center w-full">
          {gifs?.map((gif: {id: string, embed_url: string, bitly_url: string, images: {fixed_height: {url: string}}}) => (
            <li key={gif.id} className="p-3">
              <img src={gif.images.fixed_height.url} />
            </li>
          ))}
        </ul>
      </Suspense>
      </div>
    </main>
    </>
  )
}
