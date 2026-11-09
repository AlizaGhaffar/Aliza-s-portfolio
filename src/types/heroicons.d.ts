declare module '@heroicons/react/24/outline' {
  import * as React from 'react';

  type SVGIconComponent = React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.SVGProps<SVGSVGElement>> &
      { title?: string; titleId?: string } &
      React.RefAttributes<SVGSVGElement>
  >;

  export const AcademicCapIcon: SVGIconComponent;
  export const ArrowDownTrayIcon: SVGIconComponent;
  export const ArrowTopRightOnSquareIcon: SVGIconComponent;
  export const Cog6ToothIcon: SVGIconComponent;
  export const CodeBracketSquareIcon: SVGIconComponent;
  export const CommandLineIcon: SVGIconComponent;
  export const CubeIcon: SVGIconComponent;
  export const EnvelopeIcon: SVGIconComponent;
  export const LinkIcon: SVGIconComponent;
  export const MapPinIcon: SVGIconComponent;
  export const RocketLaunchIcon: SVGIconComponent;
  export const StarIcon: SVGIconComponent;
  export const UserIcon: SVGIconComponent;
}
