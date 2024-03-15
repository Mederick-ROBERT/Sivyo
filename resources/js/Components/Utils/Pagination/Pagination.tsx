import {Link} from "@inertiajs/react";

import { IconButton } from '@chakra-ui/react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

interface PaginationProps {
  next_page_url: string | null
  prev_page_url: string | null
}

export default function Pagination({ next_page_url, prev_page_url }: PaginationProps) {
  return (
    <div className="pagination">
      {prev_page_url !== null && (
        <Link href={prev_page_url} className="pagination_link">
          <IconButton aria-label='Search database' icon={<ChevronLeftIcon />} />
        </Link>
      )}
      {next_page_url !== null && (
        <Link href={next_page_url} className="pagination_link">
          <IconButton aria-label='Search database' icon={<ChevronRightIcon />} />
        </Link>
      )}
    </div>
  )
}
