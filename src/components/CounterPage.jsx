import { useState, useEffect } from 'react'

export default function CounterPage() {
      const [count, setCount] = useState(0);
    
      useEffect(() => {
        const timer = setInterval(() => {
          setCount((ct) => {
            // when error happens, the stack trace get shown in new relic
            // if (ct === 10) {
            //   throw new Error('count reached 10');
            // }
            return ct + 1;
          });
        }, 1000);
    
        return () => clearInterval(timer);
      }, [])

    return <div>
      Counter <span> {count} </span>
    </div>
}