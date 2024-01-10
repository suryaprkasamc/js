import { env } from "@/next.config"

const appName = process.env.NEXT_PUBLIC_APP_NAME;
const appVersion =  process.env.NEXT_PUBLIC_APP_VERSION


  const jsonData = [

  {
    data:'',
    source:{
      'input and Source':'www.google.com',
      'Vishnu':'www.google.com',
      'surya':'www.accenture.com'
    }
  },

  {
    data:'',
    source:{
      'input and Source':'www.google.com'
    }
  }
  ]
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    
    <div>
      This is the sample app to check how  key vault works in azure
    </div>

    <div>
      the following are the env variables 

      <div>
        This is the name 
        <h1 className="text-[80px]">
        {appName}
        </h1>
         and version is <h2 className="text-[60px]">
         {appVersion}
         </h2>
      </div>

    </div>


    <div>

    {jsonData.map((x, k) => {
  let keys = Object.keys(x.source);

  return (
    <div key={k}>
      <h3>{x.data}</h3>
      <div>
        {keys.map((v, b) => (
          <div key={b} className="m-4">
            <a
              className="underline hover:text-blue-500"
              target="_blank"
              href={x.source[v].startsWith('http') ? x.source[v] : `http://${x.source[v]}`}
            >
              {v}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
})}


    </div>

    </main>
  )
}
