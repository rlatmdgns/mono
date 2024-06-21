'use client'

import { useDebounce } from '@/shared/hooks/index'
import { KAKAO_MAP_URL } from '@/shared/constants'
import { useEffect, useState } from 'react'

declare global {
  interface Window {
    kakao: any
  }
}

export const useSetMap = (
  mapId: string,
  address: string,
  markerText?: string,
  draggable?: boolean,
) => {
  const [windowSize, setWindowSize] = useState({
    width: 0,
    height: 0,
  })

  useDebounce(() => onLoadKakaoAPI(), 300, windowSize)

  const onLoadKakaoAPI = () => {
    window?.kakao?.maps?.load(() => {
      const container = document.getElementById(mapId)
      const options = {
        center: new window.kakao.maps.LatLng(33.450701, 126.570667),
        level: 3,
        draggable: draggable,
      }
      const map = new window.kakao.maps.Map(container, options)

      const geocoder = new window.kakao.maps.services.Geocoder()
      geocoder.addressSearch(address, function (result: any, status: any) {
        if (status === window.kakao.maps.services.Status.OK) {
          const coords = new window.kakao.maps.LatLng(result[0].y, result[0].x)

          const marker = new window.kakao.maps.Marker({
            map: map,
            position: coords,
          })

          if (markerText) {
            const content = `<div class="customoverlay"
                style="padding:10px; background:#fff; border-radius:8px; box-shadow:rgb(0 0 0 / 20%) 0 0 8px;"
              >
                <span class="title">${markerText}</span>
              </div>`

            new window.kakao.maps.CustomOverlay({
              map: map,
              position: coords,
              content: content,
              yAnchor: 2.3,
            })
          }

          map.setCenter(coords)
          map.setZoomable(false)
        }
      })
    })
  }

  useEffect(() => {
    let isKakaoMapScript: HTMLElement | null
    const kakaoMapScript = document.createElement('script')
    kakaoMapScript.setAttribute('id', 'kakao-map')
    kakaoMapScript.async = false
    kakaoMapScript.src = KAKAO_MAP_URL
    document.head.appendChild(kakaoMapScript)
    kakaoMapScript.addEventListener('load', onLoadKakaoAPI)
    isKakaoMapScript = document.getElementById('kakao-map')

    const windowSize = {
      width: window.innerWidth,
      height: window.innerHeight,
    }
    setWindowSize({ ...windowSize })

    window.addEventListener('resize', () => {
      const changedWindowSize = {
        width: window.innerWidth,
        height: window.innerHeight,
      }
      setWindowSize({ ...changedWindowSize })
    })

    return () => {
      isKakaoMapScript?.remove()
    }
  }, [address])

  useEffect(() => {
    return () => {
      window.removeEventListener('resize', () => {
        return null
      })
    }
  }, [windowSize])
}
