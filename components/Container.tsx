import { forwardRef } from 'react'
import clsx from 'clsx'

const OuterContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
({ className, children, ...props }, ref) => {
  return (
    <div ref={ref} className={clsx('sm:px-8', className)} {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">{children}</div>
    </div>
  )
}
)

OuterContainer.displayName = 'OuterContainer'

const InnerContainer = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
({ className, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={clsx('relative px-4 sm:px-8 lg:px-12', className)}
      {...props}
    >
      <div className="mx-auto max-w-2xl lg:max-w-5xl">{children}</div>
    </div>
  )
}
)

InnerContainer.displayName = 'InnerContainer'

type ContainerComponent = React.ForwardRefExoticComponent<
  React.HTMLAttributes<HTMLDivElement> & React.RefAttributes<HTMLDivElement>
> & {
  Outer: typeof OuterContainer;
  Inner: typeof InnerContainer;
};

const Container = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
({ children, ...props }, ref) => {
  return (
    <OuterContainer ref={ref} {...props}>
      <InnerContainer>{children}</InnerContainer>
    </OuterContainer>
  )
}
) as ContainerComponent;

Container.displayName = 'Container'

Container.Outer = OuterContainer
Container.Inner = InnerContainer

export { Container }

