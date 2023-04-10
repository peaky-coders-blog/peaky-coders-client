import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { t } from 'languages'
import { T_Params } from 'models/routes'
import { articlesAPI } from 'services'

export const Article = () => {
  const { articleId } = useParams() as T_Params

  const { data, isLoading } = useQuery({
    queryFn: () => articlesAPI.getArticle({ articleId }),
    queryKey: ['article', articleId],
  })

  return (
    <div>
      {t('page.article.title')}

      <div>
        {isLoading ? (
          'Загрузка...'
        ) : data ? (
          <div key={data.id}>
            <div>{data.title}</div>
            <div>{data.content}</div>
          </div>
        ) : (
          <p>Ошибка</p>
        )}
      </div>
    </div>
  )
}

// JSON.stringify(data, null, 2)
