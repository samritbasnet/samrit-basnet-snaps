import photos from "../../Data/photos.json";
import './Photos.scss';

const Photos=({selectedTag,isTagPanelOpen})=>{
    const filteredPhotos=selectedTag ? photos.filter((photo)=>photo.tags.includes(selectedTag)) : photos;
    // const filteredPhotos=photos.filter((photo)=>photo.tags.includes(selectedTag));

    console.log(filteredPhotos);
    console.log(selectedTag);
    return(
<div className={`photos ${isTagPanelOpen ? "with-tags-open" : ""}`}>
    {filteredPhotos.map((photo)=>(
        <article className='photos__photo' key={photo.id}>
        <div className="photos__container">

             <img className="photos__image" src={photo.photo} alt={photo.photoDescription} />
             <div className="photos__author"><p>{photo.photographer}</p></div>
            {photo.tags.map((tag,index)=>(
                <p key={index}>{tag}</p>
            ))}
             </div> 
         
        </article>
    ))}
</div>
    )

}
export default Photos;