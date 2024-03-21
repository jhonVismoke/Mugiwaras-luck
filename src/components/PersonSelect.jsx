import { useState } from 'react'
import './PersonSelect.css'

const PersonSelect = () => {
  //<img src='https://pm1.aminoapps.com/6207/d220648cf28024d10207a0cbbe08bf1e475f3f46_00.jpg' alt='?'/>
  const [imgMugiwara, setImgMugiwara] = useState('')
  const [selectMugiwara, setSelectMugiwara] = useState('')
  const [loading, setLoading] = useState(false)

  const ramdomPerson =[
    {imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr429HVCtKgXLP5lK3RAVvUXhg-vYxV4Qx5g&s', mugiwara: 'Luffy'},
    {imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7X7lG2pvkreBDeQ6-rlVPLjXMtpmuXJdzZg&s', mugiwara: 'Zoro'},
    {imgUrl: 'https://c4.wallpaperflare.com/wallpaper/272/192/953/anime-one-piece-sanji-one-piece-wallpaper-preview.jpg', mugiwara: 'Sanji'},
    {imgUrl: 'https://i.pinimg.com/736x/c8/a1/22/c8a122459bbb1e89f2065d82add27fd8.jpg', mugiwara: 'Jimbe'},
    {imgUrl: 'https://images7.alphacoders.com/122/1224526.jpg', mugiwara: 'Robin'},
    {imgUrl: 'https://avatars.mds.yandex.net/i?id=cc5052f05154006db52d8bb09f153d7d-4441308-images-thumbs&n=13', mugiwara: 'Brook'},
    {imgUrl: 'https://www.teahub.io/photos/full/146-1460437_franky-one-piece.jpg', mugiwara: 'Franky'},
    {imgUrl: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/d96bb958-4e6c-4ce0-9447-fbe226fbbecf/dfv0n5h-8f8b4c1f-f66a-41da-b978-87c56651d92a.jpg', mugiwara: 'Nami'},
    {imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlwxdAWpF7D1EH_jPKstnrZmFtsd0XNMilwNEoxA5Q1Q&s', mugiwara: 'God Usopp'},
    {imgUrl: 'https://s1.zerochan.net/Tony.Tony.Chopper.600.3508900.jpg', mugiwara: 'Chooper'},
  ]

  const mugiwaraSelect = () =>{
    setLoading(true)
    const randomIndex = Math.floor(Math.random() * ramdomPerson.length);
    const randomMugiwara = ramdomPerson[randomIndex];
    setTimeout(() =>{
      setImgMugiwara((prev) => randomMugiwara.imgUrl)
      setSelectMugiwara((prev) => randomMugiwara.mugiwara)
      setLoading(false)
    }, 4000)
  }
  const handleOnClick = () =>{
    setImgMugiwara('')
    setSelectMugiwara('')
    mugiwaraSelect()
  }

  return (
    <div className='personSection'>
        <h1 className='title'>Qual dos mugiwara você será?</h1>
        <div className='Person'>
        {loading && <img className='loadingIMG' src='https://cdn.icon-icons.com/icons2/1029/PNG/256/Luffys_flag_icon-icons.com_76118.png' alt='one piece'/>}  
        {!loading && imgMugiwara ? (
         <img src={imgMugiwara} alt={selectMugiwara} />
        ) : !loading ? (
          <img src='https://pm1.aminoapps.com/6207/d220648cf28024d10207a0cbbe08bf1e475f3f46_00.jpg' alt='?'/>
        ) : null}

        {selectMugiwara && <h2>{selectMugiwara}</h2>}
        </div>
        <button className='btn' onClick={handleOnClick} disabled={loading}>Vamos ver!</button>
    </div>
  )
}

export default PersonSelect