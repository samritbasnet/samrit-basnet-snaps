import tags from '../../Data/tags.json'

const Tags=({selectedTag,setSelectedTag})=>{
    return(
        <div className='tags-panel-open'>
            <h2>Filters</h2>
            {tags.map((tag,index)=>(
                <p
                key={index}
                className={`tags-panel__tag 
                    ${selectedTag===tag ? "tags-panel__tag--selected": ""}`}
                    onClick={()=>setSelectedTag(truthyChecker(tag))}

                >
                    {tag}
                </p>
            ))}

        </div>
    )
}