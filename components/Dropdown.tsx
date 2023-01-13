import React from 'react'
import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { Menu, ChevronRight, Check, User } from 'react-feather'

const Dropdown = () => {
    const [bookmarksChecked, setBookmarksChecked] = React.useState(true)
    const [urlsChecked, setUrlsChecked] = React.useState(false)
    const [person, setPerson] = React.useState('pedro')

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <button
                    className={[
                        'transition-colors duration-200',
                        'flex h-10 w-10 items-center justify-center rounded', // Layout
                        'bg-scale-200 hover:bg-scale-500', // Light mode
                        'text-scale-900 hover:text-scale-1200 ', // Dark mode
                    ].join(' ')}
                >
                    <Menu size={18} strokeWidth={2} />
                </button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content
                    className="DropdownMenuContent"
                    sideOffset={15}
                >
                    <DropdownMenu.Item className="DropdownMenuItem">
                        New Tab <div className="RightSlot">⌘+T</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem">
                        New Window <div className="RightSlot">⌘+N</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Item className="DropdownMenuItem" disabled>
                        New Private Window{' '}
                        <div className="RightSlot">⇧+⌘+N</div>
                    </DropdownMenu.Item>
                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className="DropdownMenuSubTrigger">
                            More Tools
                            <div className="RightSlot">
                                <ChevronRight size={18} strokeWidth={2} />
                            </div>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent
                                className="DropdownMenuSubContent"
                                sideOffset={2}
                                alignOffset={-5}
                            >
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Save Page As…{' '}
                                    <div className="RightSlot">⌘+S</div>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Create Shortcut…
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Name Window…
                                </DropdownMenu.Item>
                                <DropdownMenu.Separator className="DropdownMenu.Separator" />
                                <DropdownMenu.Item className="DropdownMenuItem">
                                    Developer Tools
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={bookmarksChecked}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            <Check size={18} strokeWidth={2} />
                        </DropdownMenu.ItemIndicator>
                        Show Bookmarks <div className="RightSlot">⌘+B</div>
                    </DropdownMenu.CheckboxItem>
                    <DropdownMenu.CheckboxItem
                        className="DropdownMenuCheckboxItem"
                        checked={urlsChecked}
                    >
                        <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                            <Check size={18} strokeWidth={2} />
                        </DropdownMenu.ItemIndicator>
                        Show Full URLs
                    </DropdownMenu.CheckboxItem>

                    <DropdownMenu.Separator className="DropdownMenuSeparator" />

                    <DropdownMenu.Label className="DropdownMenuLabel">
                        People
                    </DropdownMenu.Label>
                    <DropdownMenu.RadioGroup
                        value={person}
                        onValueChange={setPerson}
                    >
                        <DropdownMenu.RadioItem
                            className="DropdownMenuRadioItem"
                            value="pedro"
                        >
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <User size={18} strokeWidth={2} />
                            </DropdownMenu.ItemIndicator>
                            Pedro Duarte
                        </DropdownMenu.RadioItem>
                        <DropdownMenu.RadioItem
                            className="DropdownMenuRadioItem"
                            value="colm"
                        >
                            <DropdownMenu.ItemIndicator className="DropdownMenuItemIndicator">
                                <User size={18} strokeWidth={2} />
                            </DropdownMenu.ItemIndicator>
                            Colm Tuite
                        </DropdownMenu.RadioItem>
                    </DropdownMenu.RadioGroup>

                    <DropdownMenu.Arrow className="DropdownMenuArrow" />
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    )
}

export default Dropdown
