export default function page({params}){
    return(
        <div>
            My post: {params.slug[1]} / {params.slug[0]}
        </div>
    )
}