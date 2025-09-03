import { clsx } from 'clsx'

type HeadingProps = {
  as?: 'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  dark?: boolean
} & React.ComponentPropsWithoutRef<
  'div' | 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
>

export function Heading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-5xl font-semibold tracking-tight text-pretty text-gray-950 data-dark:text-white leading-tight lg:text-6xl xl:text-7xl',
      )}
    />
  )
}

export function Subheading({
  className,
  as: Element = 'h2',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'font-mono text-xs/6 font-semibold tracking-widest text-gray-600 uppercase data-dark:text-gray-400',
      )}
    />
  )
}

export function Lead({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(className, 'text-xl font-medium text-gray-600 leading-relaxed lg:text-2xl')}
      {...props}
    />
  )
}

export function SecondaryHeading({
  className,
  as: Element = 'h3',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-3xl font-semibold tracking-tight text-gray-950 data-dark:text-white leading-tight lg:text-4xl',
      )}
    />
  )
}

export function TertiaryHeading({
  className,
  as: Element = 'h4',
  dark = false,
  ...props
}: HeadingProps) {
  return (
    <Element
      {...props}
      data-dark={dark ? 'true' : undefined}
      className={clsx(
        className,
        'text-2xl font-semibold tracking-tight text-gray-950 data-dark:text-white leading-tight lg:text-3xl',
      )}
    />
  )
}

export function BodyText({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(className, 'text-base font-normal text-gray-700 leading-relaxed lg:text-lg')}
      {...props}
    />
  )
}

export function SmallText({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'p'>) {
  return (
    <p
      className={clsx(className, 'text-sm font-normal text-gray-600 leading-normal')}
      {...props}
    />
  )
} 