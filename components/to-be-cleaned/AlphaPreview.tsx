import { Alert } from '@packages/ui'

const AlphaPreview = () => {
  return (
    <Alert title="Alpha preview" withIcon variant="warning">
      This is not suitable for production
    </Alert>
  )
}

export default AlphaPreview
