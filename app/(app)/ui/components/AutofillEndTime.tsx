'use client'

import { useEffect, useRef } from 'react'
import { useFormFields, useForm } from '@payloadcms/ui'

export const AutofillEndTime = () => {
  const startTime = useFormFields(([fields]) => fields?.start_time?.value as string)
  const { dispatchFields } = useForm()
  const prevStartTime = useRef<string | null>(null)

  useEffect(() => {
    if (!startTime) {
      prevStartTime.current = null
      return
    }

    // Only autofill if start_time has changed and end_time is empty or was previously autofilled
    if (startTime !== prevStartTime.current) {
      prevStartTime.current = startTime
      const start = new Date(startTime)
      start.setHours(start.getHours() + 2)
      dispatchFields({
        type: 'UPDATE',
        path: 'end_time',
        value: start.toISOString(),
      })
    }
  }, [startTime, dispatchFields])

  return null
}