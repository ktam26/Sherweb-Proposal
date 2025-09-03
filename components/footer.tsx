import React from 'react';
import { Container } from './container'
import { Logo } from './logo'
import { Link } from './link'

export function Footer() {
  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-linear-115 from-[#fff1be] from-28% via-[#ee87cb] via-70% to-[#b060ff] sm:bg-linear-145" />
      <Container className="flex flex-col items-center justify-center">
        <Logo className="h-9 w-auto mb-2" />
      </Container>
    </footer>
  )
} 