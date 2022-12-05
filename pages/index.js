import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link";

export default function Home({data}) {
console.log(data);
  return (
   <div style={{width:"300px",
   height:"500px"
   
   }}>
    <ul
    style={{
      dispay:"flex",
      justifyContent:"space-around",
      padding:"5px",
      listStyle:"none",
      alignItems:"center",
      backgroundColor:"teal",
    }}
    >
      <li>
        <Link href='/'>{data.name}</Link>
      </li>
      <li>
      <Link href='/projects'>Project</Link>
      </li>

      <li>
      <lLink href='/experience'>Experience</lLink>
      </li>
      <img
      src={data.avtar_url}
      alt={data.name}
      width={50}
      style={{ borderRadius:"40%"}}
      />
    </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const response= await fetch(`https://api.github.com/users/Shubh7368`);
  const data=await response.json();

  return {
    props: {data}, // will be passed to the page component as props
  };
}


