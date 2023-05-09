"use client"

import { useRef } from "react"
import { Fact } from "../types/Fact.type"
import { useStore } from "@/context/store"

export default function StoreInitializer({ facts }: { facts: Fact[] }) {
  const initialized = useRef(false)
  if (!initialized.current) {
    useStore.setState({
      facts,
    })
    initialized.current = true
  }

  return null
}
