import QRCodeComponent from './qr-code-component/qr-code-component'
import ProductPreviewCardComponent from './product-preview-card-component/product-preview-card-component'

type SolutionRouteType = {
  title: string,
  path: string,
  element: JSX.Element,
}

const SolutionRoutes: SolutionRouteType[] = [
  {
    title: 'QR Code Component',
    path: 'qr-code-component',
    element: QRCodeComponent(),
  },
  {
    title: 'Product Preview Card Component',
    path: 'product-preview-card-component',
    element: ProductPreviewCardComponent()
  }
]

export default SolutionRoutes