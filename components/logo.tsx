import React from 'react';
import { clsx } from 'clsx'

export function Logo({ className }: { className?: string }) {
  return (
    <img
      src="/Logo_black_Text.svg"
      alt="Strama AI"
      className={clsx(className, 'h-20 w-auto')}
    />
  )
}

export function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/Logo_black_Text.svg"
      alt="Strama AI"
      className={clsx(className, 'h-20 w-auto')}
    />
  )
} 