import { headers as getHeaders } from 'next/headers.js'
import { getPayload } from 'payload'
import { Button } from '@carbon/react'

import config from '@/payload.config'

export default async function Index() {
  const headers = await getHeaders()
  const payloadConfig = await config
  const payload = await getPayload({ config: payloadConfig })
  const { user } = await payload.auth({ headers })

  return (
    <section>
      <h1>Hello from Projects</h1>
      <Button>Click Me!</Button>
    </section>
  )
}
