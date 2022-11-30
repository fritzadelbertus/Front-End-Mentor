import QRCodeComponent from './qr-code-component/main'
import ProductPreviewCardComponent from './product-preview-card-component/main'

type SolutionRouteType = {
  title: string,
  path: string,
  difficulty: string,
  repo: string,
  element: JSX.Element,
}

const SolutionRoutes: SolutionRouteType[] = [
  {
    title: 'QR Code Component',
    path: 'qr-code-component',
    difficulty: 'Newbie',
    repo: '',
    element: QRCodeComponent(),
  },
  {
    title: 'Product Preview Card Component',
    path: 'product-preview-card-component',
    difficulty: 'Newbie',
    repo: '',
    element: ProductPreviewCardComponent()
  }
]

export default SolutionRoutes