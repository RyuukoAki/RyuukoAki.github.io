import { useEffect, useState } from "preact/hooks";

export default function SelectImgCard({ src, alt = "Project image" }) {
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		if (!isOpen) return;

		const handleEscape = (event) => {
			if (event.key === "Escape") {
				setIsOpen(false);
			}
		};

		document.addEventListener("keydown", handleEscape);
		return () => document.removeEventListener("keydown", handleEscape);
	}, [isOpen]);

	return (
		<>
			<button
				type="button"
				onClick={() => setIsOpen(true)}
				className="block aspect-video w-full overflow-hidden rounded-xl bg-onyx-10/25 ring-1 ring-white/10 transition-transform duration-300 hover:scale-105 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-70"
				aria-label={`Open larger image: ${alt}`}
			>
				<img src={src} alt={alt} className="h-full w-full object-contain" loading="lazy" />
			</button>

			{isOpen && (
				<div
					className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 p-4"
					onClick={() => setIsOpen(false)}
					role="dialog"
					aria-modal="true"
				>
					<div className="relative" onClick={(event) => event.stopPropagation()}>
						<button
							type="button"
							onClick={() => setIsOpen(false)}
							className="absolute right-2 top-2 z-10 rounded-full bg-onyx-20/80 px-3 py-1 text-pale-slate ring-1 ring-white/20 hover:bg-onyx-30"
							aria-label="Close enlarged image"
						>
							✕
						</button>
						<img
							src={src}
							alt={alt}
							className="max-h-[90vh] max-w-[90vw] rounded-xl bg-onyx-10 shadow-xl ring-1 ring-white/10"
						/>
					</div>
				</div>
			)}
		</>
	);
}
