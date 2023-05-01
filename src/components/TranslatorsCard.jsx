import { React, Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}


function TranslatorItem({ translator }) {
    return (
      <li className="py-4 flex">
        <img className="h-10 w-10 rounded-full" src={translator.flag_icon} alt="" />
        <div className="ml-3">
          <p className="text-sm font-medium text-gray-900">{translator.language_name_en}</p>
          <p className="text-sm text-gray-500">{translator.language_name_native}</p>
        </div>
      </li>
    )
  }  

export default function TranslatorsCard({translators}) {
  return (
    <div className="grid grid-rows-4 grid-flow-col gap-4">
    <ul className="divide-y divide-gray-200">
      {translators.map((translator) => <TranslatorItem key={translator.language_uid} translator={translator} />)}
    </ul>
    </div>
  )
}
