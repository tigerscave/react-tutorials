import Link from 'next/link'

const Index = () => {
  return (
    <div>
      <h1>Hello react tutorials!</h1>
      <ul>
        <li>
          <Link href="/select-example">
            <a>select-example</a>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        h1 {
          color: gray;
        }
      `}</style>
    </div>
  );
}

export default Index;